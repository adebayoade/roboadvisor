'use client';

import Image from 'next/image';
import styles from './page.module.css';
import {
  Stack,
  Container,
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import { useState } from 'react';
import useFetch from './_hooks/useFetch';

export default function Home() {
  const [risk, setRisk] = useState([0]);

  return (
    <Container>
      <Box marginTop={'40px'}>
        <Text fontSize={'large'}>Example Portfolio:</Text>

        <Stack gap="20px">
          <Slider
            onChangeEnd={val => {
              setRisk(val);
            }}
            step={1}
            defaultValue={0}
            min={0}
            max={10}
          >
            <SliderTrack bg="red.100">
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Text as="span">Risk Score: {`${risk}`}</Text>
        </Stack>
      </Box>
    </Container>
  );
}
