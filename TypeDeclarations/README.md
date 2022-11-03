/\* -------------------------------------------------------------------------
Type Declarations
Working With 3rd Party Code

        This file contains all the type declarations for the application.
    Specifically, how to deal with 3rd party Javascript libraries in a
    Typescript ecosystem.

        Type Declarations are a way to tell Typescript how to deal with
    Javascript libraries that don't have type declarations. This is
    necessary because Typescript is a superset of Javascript, and
    Javascript doesn't have types. So, Typescript needs to know how to
    deal with Javascript libraries that don't have types.

        The Type Declaration files are written in Typescript, and are
        has two main kinds of files:

            1 - .ts files are implementation files that contain types and
            executable code. These are the files that produce .js outputs,
            and are where you'd normally write your code.
            2 - .d.ts files are declaration files that contain only type
            information. These files don't produce .js outputs; they are only
            used for typechecking.

        .ts files are a bunch of interfaces, classes, functions, etc. that
        describe the types of one library or code. In this file, we're going
        to learn about working with third party code and third party type
        declarion files.


        OPEN THIS FOLDER IN VISUAL STUDIO CODE TO SEE THE CODE IN ACTION.
        cd /TypeDeclarations
        code .
    ------------------------------------------------------------------------- */
