Jalangi2
=======
Prepared by: Abbas & Juzer (PTA - Project) - TU Darmstadt

### Introduction

This report focuses on the detailed outlook of the technical implementation and the functionality of our project. The implementation of dynamic features of JavaScript in top 20 Alexa websites is also published in this project. JavaScript provides a variety of dynamic features which could be modified on run-time. Also, it is a loosely typed language, meaning, one does not need to declare the data type variables explicitly. It is considered as a major challenge to analyze JavaScript due to its dynamic behavior.

The dynamic behavior in real-world JavaScript applications is used to build static analysis tools focusing on those options that are normally available in JavaScript applications. The question that should be asked is: Are such tools truly represents the analysis required for the dynamics options of JavaScript code? Similarly, Sunspider; a tool that is used to provide dynamic analyses and measures the accuracy of static analysis. However, the results obtained from these benchmarks are useful if they represent the dynamic behavior of real-world JavaScript applications precisely.

The main objective of this project is to study the utilization of dynamic characteristics in real-world JavaScript programs. The study is supported with a dynamic analysis and will cover the subsequent dynamic features of JavaScript i.e. eval, add, delete, method overriding, and prototype updates. The conclusion provides the final assessment of the analysis performed individually on the websites and octane benchmarks [3]. For instance, if ‘eval’ function is frequently used in a website, but not in benchmarks it can be concluded that the usage of ‘eval’ method in real-world application is not a true representative for those benchmarks


### Tasks

As per our task, we were asked to use following dynamic features of JavaScript which are as follows:
1.	Eval function 
2.	Dynamic property addition 
3.	Dynamic property deletion 
4.	Method overriding 
5.	Prototype updates

### How to Use

If you have a fresh installation of Ubuntu, you can install all the requirements by invoking the following commands from a terminal.

    sudo apt-get update
    sudo apt-get install python-software-properties python g++ make
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get update
    sudo apt-get install chromium-browser

### Installation

Clone the repository, and then run:

    npm install

### Run tests

    python scripts/test.traceall.py
    python scripts/test.analysis.py
    python scripts/test.dlint.py

### Usage


    node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js tests/octane/deltablue.js TestCases/TestCase.js

		
Our Test Case analysis file is found under folder TestCases and file is named "TestCases.js"

Our Analysis Template can be found under "Dynamic-Features-Of-JS\src\js\runtime" named "analysisCallbackTemplate.js"

Thank you.

License
-------

Jalangi2 is distributed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0.html).
