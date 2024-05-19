import React from 'react';

const CmdInt = () => {
    return (
        <>
            <h3>https://www.tutorialspoint.com/what-is-the-purpose-of-the-command-interpreter</h3>
            <h1>Command Interpreter</h1>
            Command interpreters serve many purposes and are more useful than graphical user interfaces in some cases. Details about these cases are given as follows −

            Command interpreters have a large range of commands and queries available for different operations. Also, it is much faster to type than to click as is done using graphical user interfaces..
            There are some systems that don’t have enough resources to support graphical user interfaces. In those cases, command interpreters can be used.
            Scientists and engineers often used command interpreters in scientific environments. Technically advanced users also prefer command interpreters as compared to graphical user interfaces.
            People with visual disabilities use command interpreters as they cannot work with graphical user interfaces. Commands and instructions can be displayed using braille displays in command interpreters.
            Command interpreters are used in embedded systems as they are very compact and can be easily ported to different hardware.

            lets start with Command
            <h2>Command</h2>
            This design pattern is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

            now the Interpreter pattern
            <h2>Interpreter</h2>
            This design pattern is used to define a grammatical representation for a language and provides an interpreter to deal with this grammar. The best example of this pattern is java compiler that interprets the java source code into byte code that is understandable by JVM. Google Translator is also an example of interpreter pattern where the input can be in any language and we can get the output interpreted in another language.
        </>
    )
}

export default CmdInt