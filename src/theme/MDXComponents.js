import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import LiquidCodeBlock from '@site/src/components/LiquidCodeBlock';
import FormattedResponse from '@site/src/components/FormattedResponse';
import OAuthScopesTabs from '@site/src/components/OAuthScopesTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "CodeBlock" tag to our desired component
  CodeBlock: LiquidCodeBlock,
  // Add FormattedResponse component
  FormattedResponse: FormattedResponse,
  OAuthScopesTabs: OAuthScopesTabs,
  Tabs: Tabs,
  TabItem: TabItem,
};
