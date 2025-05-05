import { Box, Button, Heading, Input, InputGroup, NativeSelect, Text } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion';
import { ChangeEvent, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})
type Country = {
  country: string;
  name: string;
  num: string;
  placeholder: string;
};

const countries: Country[] = [
  { country: "rus", name: "Россия", num: "+7", placeholder: "999 999-99-99" },
  { country: "usa", name: "Соединенные Штаты", num: "+1", placeholder: "999 999 9999" },
  { country: "ukr", name: "Украина", num: "+380", placeholder: "99 999 99 99" },
  { country: "kaz", name: "Казахстан", num: "+7", placeholder: "999 999-99-99" },
  { country: "blr", name: "Беларусь", num: "+375", placeholder: "99 999-99-99" },
  { country: "uzb", name: "Узбекистан", num: "+998", placeholder: "99 999-99-99" },
  { country: "kgz", name: "Кыргызстан", num: "+996", placeholder: "999 999-999" },
  { country: "tjk", name: "Таджикистан", num: "+992", placeholder: "99 999-99-99" },
  { country: "arm", name: "Армения", num: "+374", placeholder: "99 999-999" },
  { country: "geo", name: "Грузия", num: "+995", placeholder: "999 99-99-99" },
  { country: "aze", name: "Азербайджан", num: "+994", placeholder: "99 999-99-99" },
  { country: "chn", name: "Китай", num: "+86", placeholder: "999 9999 9999" },
  { country: "deu", name: "Германия", num: "+49", placeholder: "9999 999999" },
  { country: "fra", name: "Франция", num: "+33", placeholder: "99 99 99 99 99" },
  { country: "gbr", name: "Великобритания", num: "+44", placeholder: "99999 999999" },
  { country: "ind", name: "Индия", num: "+91", placeholder: "99999 99999" },
  { country: "tur", name: "Турция", num: "+90", placeholder: "999 999 9999" },
];

const HelloText = () => {
  const value = "Ты не ты, когда голоден"
  const text = value.split("")
  
  return (
    <>      
      {text.map((letter, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0,
            delay: index / 15,
          }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}

interface SelectProps {
  selected: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ selected, onChange }: SelectProps) => (
  <NativeSelect.Root maxW={"30em"}>
    <NativeSelect.Field value={selected} onChange={onChange} fontSize="sm" rounded={"xl"}>
      {countries.map((e, i) => (
        <option key={i} value={e.country}>
          {e.name} ({e.num})
        </option>
      ))}
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
);

const Submit = () => (
  <Button variant="plain">
    <FaArrowRightLong />
  </Button>
);

function RouteComponent() {
  const [selectedCountry, setSelectedCountry] = useState("rus");
  const countryCode = countries.find(c => c.country === selectedCountry)?.num || "";
  const phonePlaceholder = countries.find(c => c.country === selectedCountry)?.placeholder || "(999) 999-99-99";

  return (
    <Box display={"flex"}
      flexDir={"column"}
      h={"100vh"}
      px={"2em"} gapY={"1em"}
      justifyContent={"center"}
      textAlign={'center'} 
      alignItems={"center"}
      >
      <Box pos={"relative"} bottom={"1em"}>
        <Heading size={"2xl"}><HelloText /></Heading>
        <Text fontSize={"sm"}>Войди, выбери пиццу и стань собой!</Text>
      </Box>
      <Select
        selected={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      />
      <InputGroup maxW={"30em"} startAddon={countryCode} endElement={<Submit />} startAddonProps={{roundedStart: "xl"}}>
        <Input ps="1em" placeholder={phonePlaceholder} rounded={"xl"}/>
      </InputGroup>
    </Box>
  );
}
