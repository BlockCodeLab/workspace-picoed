import { javascriptGenerator } from './generator';

const EVENT_CALLBACK = `async (done) => {\ndo {\n/* code */} while (false);\ndone();\n}`;

javascriptGenerator['event_whenkeypressed'] = (block) => {
  const keyCode = block.getFieldValue('KEY_OPTION');
  const code = `runtime.on('keypressed_${keyCode}', ${EVENT_CALLBACK});\n`;
  return code;
};
