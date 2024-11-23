import { pythonGenerator } from './generator';

pythonGenerator['event_whenkeypressed'] = (block) => {
  const keyCode = block.getFieldValue('KEY_OPTION');
  const branchCode = pythonGenerator.eventToCode('key_pressed', 'False');
  return `@when_keypressed("${keyCode}")\n${branchCode}`;
};
