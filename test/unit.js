const assert = require('assert');
import { JSDOM } from 'jsdom';
import { scrollTo, getBoundingClientRect } from './helpers';
import { scrollToAnchor } from '../src';
import anchorOffset from '../src';

describe('anchorOffset', () => {
  beforeEach(() => {
    return JSDOM.fromFile('tests/test.html').then(dom => {
      global.window = dom.window;
      global.document = dom.window.document;
      window.scrollTo = scrollTo;
      window.Element.prototype.getBoundingClientRect = getBoundingClientRect;
    });
  });

  describe('call scrollToAnchor', function() {
    describe('with incorrect id', () => {
      it('should not scroll', () => {
        assert.equal(window.scrollY, 0);
        scrollToAnchor('bananas', 0);
        assert.equal(window.scrollY, 0);
      });
    });

    describe('without an offset', () => {
      it('should scroll to anchor', () => {
        assert.equal(window.scrollY, 0);
        scrollToAnchor('one', 0);
        assert.equal(window.scrollY, 50);
      });
    });

    describe('with an offset', () => {
      it('should scroll to anchor with offset', () => {
        assert.equal(window.scrollY, 0);
        scrollToAnchor('two', 20);
        assert.equal(window.scrollY, 530);
      });
    });
  });

  describe('load page with hash in url', () => {
    beforeEach(() => {
      window.location.hash = '#two';
      anchorOffset(30);
    });

    it('should scroll to the anchor with offset', () => {
      assert.equal(window.scrollY, 520);
    });

    describe('scroll away and click same hash', () => {
      it('should return to correct position', (done) => {
        window.scrollTo(0, 800);
        document.querySelector('[href="#two"]').click();
        setTimeout(() => {
          assert.equal(window.scrollY, 520);
          done();
        }, 10);
      });
    });
  });

  describe('load page without hash in url', () => {
    describe('with offset argument', () => {
      beforeEach(() => {
        anchorOffset(30);
      });

      it('should not scroll', () => {
        assert.equal(window.scrollY, 0);
      });

      describe('change hash in url', () => {
        it('should scroll to the anchor with offset', (done) => {
          window.location.hash = '#three';
          setTimeout(() => {
            assert.equal(window.scrollY, 1020);
            done();
          }, 10);
        });
      });

      describe('click first hash', () => {
        it('should scroll to first anchor with offset', (done) => {
          document.querySelector('[href="#one"]').click();
          setTimeout(() => {
            assert.equal(window.scrollY, 20);
            done();
          }, 10);
        });
      });

      describe('click second hash', () => {
        it('should scroll to second anchor with offset', (done) => {
          document.querySelector('[href="#two"]').click();
          setTimeout(() => {
            assert.equal(window.scrollY, 520);
            done();
          }, 10);
        });
      });

      describe('click third hash', () => {
        it('should scroll to third anchor with offset', (done) => {
          document.querySelector('[href="#three"]').click();
          setTimeout(() => {
            assert.equal(window.scrollY, 1020);
            done();
          }, 10);
        });
      });
    });

    describe('without offset argument', () => {
      beforeEach(() => {
        anchorOffset();
      });

      it('should not scroll', () => {
        assert.equal(window.scrollY, 0);
      });

      describe('click first hash', () => {
        it('should scroll to first anchor with offset', (done) => {
          document.querySelector('[href="#one"]').click();
          setTimeout(() => {
            assert.equal(window.scrollY, 50);
            done();
          }, 10);
        });
      });

      describe('click second hash', () => {
        it('should scroll to second anchor with offset', (done) => {
          document.querySelector('[href="#two"]').click();
          setTimeout(() => {
            assert.equal(window.scrollY, 550);
            done();
          }, 10);
        });
      });

      describe('click something that has no hash', () => {
        it('should not scroll', (done) => {
          assert.equal(window.scrollY, 0);
          document.querySelector('[href="test"]').click();
          setTimeout(() => {
            assert.equal(window.scrollY, 0);
            done();
          }, 10);
        });
      });
    });
  });
});

