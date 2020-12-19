# String calculator kata

```Step 1
Create a simple String calculator with a method signature:
    int your_function_name(string numbers)
The method can take up to two numbers, separated by commas, and will return their sum.
For example "" or "1" or "1,2" as inputs.
For an empty string it will return 0

Step 2
Allow the Add method to handle an unknown amount of numbers

Step 3
Allow the Add method to handle new lines between numbers (instead of commas):
The following input is ok: "1\n2,3" (will equal 6)
The following input is NOT ok: "1,\n" (not need to prove it - just clarifying

Step 4
Support different delimiters:
To change a delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]" for example "//;\n1;2" should return three where the default delimiter is ';'.
The first line is optional. All existing scenarios should still be supported.