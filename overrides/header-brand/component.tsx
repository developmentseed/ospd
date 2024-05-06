import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import DevSeedLogo from "./DevSeedLogo";

const Brand = styled.div`
  a:any-link {
    color: #fff;
    display: flex;
    gap: .75rem;
  }
`;

export default function Component(props) {
  return (
    <Brand>
      <Link to='/'>
        <DevSeedLogo />
        <div>
          <b>OGC Open Science Persistent Demonstrator (OSPD)</b><br />
          VEDA Dashboard
        </div>
      </Link>
    </Brand>
  )
}
