import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    await core.summary
      .addHeading('Test Coverage Results')
      .write()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
