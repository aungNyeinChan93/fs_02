import { Test, TestingModule } from '@nestjs/testing';
import { Chan } from './chan';

describe('Chan', () => {
  let provider: Chan;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chan],
    }).compile();

    provider = module.get<Chan>(Chan);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
