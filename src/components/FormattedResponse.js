import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { formatResponse } from '../utils/formatResponse';

export default function FormattedResponse({ response, request }) {
  if (request) {
    return (
      <CodeBlock language="json" title="request.json">
        {formatResponse(request)}
      </CodeBlock>
    );
  }
  return (
    <CodeBlock language="json" title="response.json">
      {formatResponse(response)}
    </CodeBlock>
  );
}
