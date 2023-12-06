import React from 'react';

import {
  styled
} from '@mui/material/styles';

// import PageTitle from 'src/components/PageTitle/PageTitle';

// import ListGroup from 'src/components/ListGroup/ListGroup';

// import CodeBlock from 'src/components/CodeBlock/CodeBlock';

// import Header from 'src/components/Header/Header';

const Page1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1280px`,
  height: `7093px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Body = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `24px 82px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  left: `0px`,
  top: `60px`,
  overflow: `hidden`,
  height: `7033px`,
  width: `1280px`,
});

const PageTitle = styled(PageTitle)({
  margin: `0px`,
});

const ListGroupsAreAFlexib = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `300`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const BasicExample = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const TheMostBasicListGrou = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ActiveItems = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const AddActiveToAListGrou = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup1 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock1 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const DisabledItems = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const AddDisabledToAListGr = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup2 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock2 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const LinksAndButtons = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const UseASOrButtonSToCrea = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup3 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock3 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Flush = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const AddListGroupFlushToR = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup4 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock4 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Numbered = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup5 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock5 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const TheseWorkGreatWithCu = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup6 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock6 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const WithBadges = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const AddBadgesToAnyListGr = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup7 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock7 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const CustomContent = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const AddNearlyAnyHtmlWith = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup8 = styled(ListGroup)({
  width: `400px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock8 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const CheckboxesAndRadios = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const PlaceBootstrapSCheck = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ListGroup9 = styled(ListGroup)({
  width: `300px`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock9 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Sass = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const Variables = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Helvetica Neue`,
  fontWeight: `500`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `16px 0px 0px 0px`,
});

const CodeBlock10 = styled(CodeBlock)({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Header = styled(Header)({
  alignSelf: `stretch`,
  width: `1280px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});


function Page() {
  return (
    <Page1>
      <Body>
        <PageTitle/>
        <ListGroupsAreAFlexib>
          {`List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.`}
        </ListGroupsAreAFlexib>
        <BasicExample>
          {`Basic example`}
        </BasicExample>
        <TheMostBasicListGrou>
          {`The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.`}
        </TheMostBasicListGrou>
        <ListGroup/>
        <CodeBlock/>
        <ActiveItems>
          {`Active items`}
        </ActiveItems>
        <AddActiveToAListGrou>
          {`Add .active to a .list-group-item to indicate the current active selection.`}
        </AddActiveToAListGrou>
        <ListGroup1/>
        <CodeBlock1/>
        <DisabledItems>
          {`Disabled items`}
        </DisabledItems>
        <AddDisabledToAListGr>
          {`Add .disabled to a .list-group-item to make it appear disabled. Note that some elements with .disabled will also require custom JavaScript to fully disable their click events (e.g., links).`}
        </AddDisabledToAListGr>
        <ListGroup2/>
        <CodeBlock2/>
        <LinksAndButtons>
          {`Links and buttons`}
        </LinksAndButtons>
        <UseASOrButtonSToCrea>
          {`Use <a>s or <button>s to create actionable list group items with hover, disabled, and active states by adding .list-group-item-action. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <li>s or <div>s) don’t provide a click or tap affordance.

Be sure to not use the standard .btn classes here.`}
        </UseASOrButtonSToCrea>
        <ListGroup3/>
        <CodeBlock3/>
        <Flush>
          {`Flush`}
        </Flush>
        <AddListGroupFlushToR>
          {`Add .list-group-flush to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).`}
        </AddListGroupFlushToR>
        <ListGroup4/>
        <CodeBlock4/>
        <Numbered>
          {`Numbered`}
        </Numbered>
        <ListGroup5/>
        <CodeBlock5/>
        <TheseWorkGreatWithCu>
          {`These work great with custom content as well.`}
        </TheseWorkGreatWithCu>
        <ListGroup6/>
        <CodeBlock6/>
        <WithBadges>
          {`With badges`}
        </WithBadges>
        <AddBadgesToAnyListGr>
          {`Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.`}
        </AddBadgesToAnyListGr>
        <ListGroup7/>
        <CodeBlock7/>
        <CustomContent>
          {`Custom content`}
        </CustomContent>
        <AddNearlyAnyHtmlWith>
          {`Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.`}
        </AddNearlyAnyHtmlWith>
        <ListGroup8/>
        <CodeBlock8/>
        <CheckboxesAndRadios>
          {`Checkboxes and radios`}
        </CheckboxesAndRadios>
        <PlaceBootstrapSCheck>
          {`Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without <label>s, but please remember to include an aria-label attribute and value for accessibility.`}
        </PlaceBootstrapSCheck>
        <ListGroup9/>
        <CodeBlock9/>
        <Sass>
          {`Sass`}
        </Sass>
        <Variables>
          {`Variables`}
        </Variables>
        <CodeBlock10/>
      </Body>
      <Header/>
    </Page1>);

  }

export default Page;

  