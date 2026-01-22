import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function OAuthScopesTabs({ children }) {
  return (
    <Tabs groupId="oauth-scopes">
      <TabItem 
        value="oauth-label" 
        label="OAuth Scopes:" 
        disabled 
        style={{
          pointerEvents: 'none', 
          cursor: 'default', 
          userSelect: 'none', 
          opacity: 0.7
        }}
      >
      </TabItem>
      {children}
    </Tabs>
  );
}
