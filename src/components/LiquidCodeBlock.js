import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import {Prism} from 'prism-react-renderer';

const FALLBACK_LANGUAGE = 'html';
let liquidRegistered = false;
let liquidRegistrationError = null;

function getLanguageFromClassName(className) {
  if (!className) {
    return null;
  }
  const match = className.match(/language-([\w-]+)/);
  return match ? match[1] : null;
}

function registerLiquidLanguage() {
  if (liquidRegistered) {
    return;
  }
  liquidRegistered = true;
  try {
    const prismBefore = globalThis.Prism;
    globalThis.Prism = Prism;
    require('prismjs/components/prism-markup-templating');
    require('prismjs/components/prism-liquid');
    if (typeof prismBefore === 'undefined') {
      delete globalThis.Prism;
    } else {
      globalThis.Prism = prismBefore;
    }
  } catch (error) {
    liquidRegistrationError = error;
  }
}

export default function LiquidCodeBlock(props) {
  const {className, language, ...rest} = props;
  const resolvedLanguage = language || getLanguageFromClassName(className);
  const isLiquid = resolvedLanguage && resolvedLanguage.toLowerCase() === 'liquid';
  if (!isLiquid) {
    return <CodeBlock className={className} language={language} {...rest} />;
  }

  registerLiquidLanguage();
  const nextLanguage = liquidRegistrationError ? FALLBACK_LANGUAGE : 'liquid';
  const nextClassName = className
    ? className.replace(/language-[\w-]+/, `language-${nextLanguage}`)
    : `language-${nextLanguage}`;

  return (
    <CodeBlock
      className={nextClassName}
      language={nextLanguage}
      {...rest}
    />
  );
}
