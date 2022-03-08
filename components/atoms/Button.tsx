import React, { useState } from 'react';

interface Props {
  prop: JSX.Element;
}

export default function Button({ prop }: Props) {
  const [clicked, setClicke] = useState(false)

  return prop;
}
