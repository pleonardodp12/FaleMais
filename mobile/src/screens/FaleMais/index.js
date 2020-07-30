import React from 'react';
import { Wrapper, Form, TextInput, SpanName } from './styles';


export default function FaleMais() {
  return (
    <Wrapper>
      <Form>
        <SpanName>Origem da ligação:</SpanName>
        <TextInput />
        <SpanName>Destino da ligação:</SpanName>
        <TextInput />
        <SpanName>Duração em min:</SpanName>
        <TextInput />
      </Form>
    </Wrapper>
  )
}