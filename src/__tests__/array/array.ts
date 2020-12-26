import { readFileSync } from 'fs';

import { convertFromDirectory } from '../../index';

describe('test array types', () => {
  test('array variations from file', async () => {
    const typeOutputDirectory = './src/__tests__/array/models';
    const result = await convertFromDirectory({
      schemaDirectory: './src/__tests__/array/schemas',
      typeOutputDirectory
    });

    expect(result).toBe(true);

    const oneContent = readFileSync(`${typeOutputDirectory}/One.ts`).toString();

    expect(oneContent).toBe(
      `/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface Item {
  name: string;
}

/**
 * a test schema definition
 */
export interface Test {
  items?: Item[];
  name?: string;
  propertyName1: boolean;
}

/**
 * A list of Test object
 */
export type TestList = Test[];
`
    );
  });
});
