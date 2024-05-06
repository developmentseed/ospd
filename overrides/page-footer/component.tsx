import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import {
  glsp,
  themeVal,
  visuallyHidden,
  media
} from '$veda-ui/@devseed-ui/theme-provider';
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";
import { reveal } from '$veda-ui/@devseed-ui/animation';
import { Button } from '$veda-ui/@devseed-ui/button';
import { CollecticonBrandGithub } from '$veda-ui/@devseed-ui/collecticons';
import { createSubtitleStyles } from '$veda-ui/@devseed-ui/typography';

const PageFooterSelf = styled.div`
  background: ${themeVal('color.base-50')};
  animation: ${reveal} 0.32s ease 0s 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  ${({ isHidden }) => isHidden && visuallyHidden()}

  ${media.smallUp`
    flex-flow: row nowrap;
  `}

  a {
    &,
    &:visited {
      color: inherit;
    }
  }
`;

const FooterCredits = styled.div`
  flex-grow: 1;
`;

const InfoList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: ${glsp(0, 1)};
  align-items: start;
  margin-bottom: ${variableGlsp()};

  ${media.smallUp`
    gap: ${glsp(0, 2)};
    margin: 0 0 0 auto;
    order: 2;
  `}

  ${media.mediumUp`
    grid-template-columns: repeat(4, auto);
    grid-auto-flow: auto;
    grid-gap: ${variableGlsp(0, 0.5)};
    align-items: center;
  `}

  dt {
    ${createSubtitleStyles()}
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
    grid-row: 1;

    ${media.mediumUp`
      margin-left: ${variableGlsp()};
    `}
  }

  dd {
    grid-row: 2;

    ${media.mediumUp`
      grid-row: 1;
    `}
  }
`;

export default function Component(props) {
  return (
    <PageFooterSelf>
      <FooterCredits>
        OGC Open Science Persistant Demonstrator &bull; {props.appVersion}
      </FooterCredits>
      <InfoList>
        <dt>Open source code</dt>
        <dd>
          <Button
            forwardedAs='a'
            href='https://github.com/NASA-IMPACT/veda-config'
            variation='base-text'
            size='small'
            fitting='skinny'
          >
            <CollecticonBrandGithub title='Explore the code' meaningful />
            GitHub
          </Button>
        </dd>
      </InfoList>
    </PageFooterSelf>
  )
}
