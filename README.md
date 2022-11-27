# webdriverIoExample. First task. Test different functionality for https://github.com/
task1.signup.js                                              :     Sign Up TestCase

test2.signIn.js                                              :     Test SignIn

task3.forgotPassword.js                                      :     Test SignIn forgot password

task4.is.displayed.js                                        :     Is displayed

task5.pricing.js                                             :     Page pricing

task6.topics.js                                              :     Page topics

task7.search.github.js                                       :     Search GitHub

task8&9.start.enterprise.js                                  :     Task8 Start Free Enterprise trial > Start Free enterprice 
                                                                   > SignIn Enterprise > Should change page to Enterprise Server 
                                                                   
task10.Careers.js                                            :     Test Careers

# Run test

Before rining test should delete "skip" after describe

To run all specs                                             :     npx wdio run ./wdio.conf.js

To run specific test files you can add a --spec parameter    :     npx wdio run ./wdio.conf.js --spec example.e2e.js


# Visual Studio Code

Version: 1.73.1(user setup)

Chromium: 102.0.5005.167

Node.js: 16.14.2

OS: Windows_NTx64 10.0.19044
