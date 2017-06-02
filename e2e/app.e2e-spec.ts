import { TasktrackerUiPage } from './app.po';

describe('tasktracker-ui App', () => {
  let page: TasktrackerUiPage;

  beforeEach(() => {
    page = new TasktrackerUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
