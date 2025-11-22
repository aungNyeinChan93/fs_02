import { Test, TestingModule } from '@nestjs/testing';
import { TestProvider } from './test-provider';

describe('TestProvider', () => {
  let provider: TestProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestProvider],
    }).compile();

    provider = module.get<TestProvider>(TestProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
