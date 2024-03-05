import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";

const Brand = styled.div`
  a:any-link {
    color: #fff;
  }
`;

export default function Component(props) {
  return (
    <Brand>
      <Link to='/'>
        <b>OGC OSPD</b><br />
        VEDA Dashboard
      </Link>
    </Brand>
  )
}
