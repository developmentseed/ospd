import React from '$veda-ui/react';
import styled from '$veda-ui/styled-components';
import { Prose } from '$veda-ui/@devseed-ui/typography';
import { Button } from '$veda-ui/@devseed-ui/button';
import { CollecticonEnvelope } from '$veda-ui/@devseed-ui/collecticons';
import { listReset, media, themeVal } from '$veda-ui/@devseed-ui/theme-provider';
import {
  Fold,
  FoldHeader,
  FoldTitle,
  FoldLead,
  FoldBody
} from '$veda-ui-scripts/components/common/fold';
import { Figure } from '$veda-ui-scripts/components/common/figure';
import { variableGlsp } from '$veda-ui-scripts/styles/variable-utils';
import { VarProse } from '$veda-ui-scripts/styles/variable-components';

import imgEnthusiasts from '../../.veda/ui/app/graphics/layout/user-enthusiasts.jpg';
import imgScientists from '../../.veda/ui/app/graphics/layout/user-scientists.jpg';
import imgResearcher from '../../.veda/ui/app/graphics/layout/user-researcher.jpg';

const AudienceList = styled.ul`
  ${listReset()};
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${variableGlsp()};

  ${media.smallUp`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.largeUp`
    grid-template-columns: repeat(3, 1fr);
  `}

  li {
    padding: ${variableGlsp(0, 2)};
  }
`;

const BlockAudienceProse = styled(VarProse)`
  /* styled-component */
`;

const BlockAudienceMedia = styled(Figure)`
  order: -1;
  overflow: hidden;
  border-radius: ${themeVal('shape.ellipsoid')};
`;

const BlockAudience = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: ${variableGlsp()};
  text-align: center;
`;

function Component() {
  return (
    <>
      <Fold>
        <FoldHeader>
          <FoldTitle>VEDA serves a wide scientific audience</FoldTitle>
          <FoldLead>
          VEDA accelerates open science by making Earth observation data inclusive, accessible, and reproducible.
          </FoldLead>
        </FoldHeader>
        <FoldBody>
          <AudienceList>
            <li>
              <BlockAudience>
                <BlockAudienceProse>
                  <h3>Earth scientists</h3>
                  <p>
                    Easily access trusted, high quality Earth data curated by science teams
                  </p>
                </BlockAudienceProse>
                <BlockAudienceMedia>
                  <img
                    src={imgScientists}
                    alt='United States at night seen from orbit'
                  />
                </BlockAudienceMedia>
              </BlockAudience>
            </li>

            <li>
              <BlockAudience>
                <BlockAudienceProse>
                  <h3>Academic researchers</h3>
                  <p>
                    Support your research efforts with an open source cloud-computing platform that works directly with your data
                  </p>
                </BlockAudienceProse>
                <BlockAudienceMedia>
                  <img
                    src={imgResearcher}
                    alt='Philippine woman scientist working at a desk in front of a computer'
                  />
                </BlockAudienceMedia>
              </BlockAudience>
            </li>

            <li>
              <BlockAudience>
                <BlockAudienceProse>
                  <h3>Science enthusiasts</h3>
                  <p>
                    Discover the latest in Earth observation, how that might impact environmental change, and how this might impact where you live.
                  </p>
                </BlockAudienceProse>
                <BlockAudienceMedia>
                  <img
                    src={imgEnthusiasts}
                    alt={`An intricate maze of small lakes and waterways define the Yukon Delta at the confluence of Alaska's Yukon and Kuskokwim Rivers with the frigid Bering Sea.`}
                  />
                </BlockAudienceMedia>
              </BlockAudience>
            </li>
          </AudienceList>
          <Prose>
            VEDA provides a flexible, open-source set of tools for science teams and organizations to share their data with stakeholders and science communities. At the same time, science teams are provided a powerful, cloud-based computing environment to further their research. This dashboard is a demonstration dashboard of the tools and capabilities that VEDA has to offer. If you would like to learn more about VEDA, and what it takes to implement your own VEDA instance, please reach out to the VEDA team!
          </Prose>
          <Prose>
            <Button
              forwardedAs='a'
              href='mailto:veda@uah.edu'
              variation='primary-fill'
            >
              <CollecticonEnvelope />
              Contact us
            </Button>
          </Prose>
        </FoldBody>
      </Fold>
    </>
  )
}

export default Component;
