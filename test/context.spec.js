/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, appContextMap, CONTEXT_URL, CONTEXT
} = require('..');

describe('Verifiable Credentials v2 Context', () => {
  it('constants', async () => {
    expect(appContextMap).to.exist;
    expect(constants).to.exist;
    expect(constants).to.have.property('CBORLD_VALUE');
    expect(CONTEXT_URL).to.exist;
    expect(CONTEXT).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL)).to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(CONTEXT_URL)).to.exist;
  });
});
