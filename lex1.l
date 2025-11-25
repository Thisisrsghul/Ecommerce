{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/Thisisrsghul/Ecommerce/blob/master/lex1.l\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "markdown",
      "source": [
        "# LEX and YACC Compiler in Colab\n",
        "\n",
        "Drawbacks:\n",
        "* Regular interrupts (Ctrl+D, Ctrl+C) for shell won't work in Colab while inputting for program.\n",
        "<br>Workaround: Store your inputs in a txt file and pass it to the program."
      ],
      "metadata": {
        "id": "Az09-x9PnHPq"
      }
    },
    {
      "cell_type": "code",
      "source": [
        "#@title Install *prerqeuisites* (run this cell first to work on LEX/YACC)\n",
        "!sudo apt install flex bison"
      ],
      "metadata": {
        "cellView": "form",
        "id": "CM_9N3RogX8y"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "markdown",
      "source": [
        "## Lex only"
      ],
      "metadata": {
        "id": "0IYbRG4He38g"
      }
    },
    {
      "cell_type": "code",
      "execution_count": 1,
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 106
        },
        "id": "Jyt0i_pTexWf",
        "outputId": "588c4c16-9f8c-4c1b-d9e0-8088bb953891"
      },
      "outputs": [
        {
          "output_type": "error",
          "ename": "SyntaxError",
          "evalue": "invalid syntax (ipython-input-3266905412.py, line 3)",
          "traceback": [
            "\u001b[0;36m  File \u001b[0;32m\"/tmp/ipython-input-3266905412.py\"\u001b[0;36m, line \u001b[0;32m3\u001b[0m\n\u001b[0;31m    int vowels = 0, consonants = 0, digits = 0, spaces = 0, others = 0;\u001b[0m\n\u001b[0m        ^\u001b[0m\n\u001b[0;31mSyntaxError\u001b[0m\u001b[0;31m:\u001b[0m invalid syntax\n"
          ]
        }
      ],
      "source": [
        "%{\n",
        "#include <stdio.h>\n",
        "int vowels = 0, consonants = 0, digits = 0, spaces = 0, others = 0;\n",
        "%}\n",
        "\n",
        "%%\n",
        "[aeiouAEIOU] { vowels++; }\n",
        "[0-9]        { digits++; }\n",
        "[ \\t\\n]      { spaces++; }\n",
        "[a-zA-Z]     { consonants++; }\n",
        ".            { others++; }\n",
        "%%\n",
        "\n",
        "int main(void)\n",
        "{\n",
        "  printf(\"Enter some text (Ctrl+D to end):\\n\");\n",
        "  yylex();\n",
        "  printf(\"\\n--- Result ---\\n\");\n",
        "  printf(\"Vowels : %d\\n\", vowels);\n",
        "  printf(\"Consonants : %d\\n\", consonants);\n",
        "  printf(\"Digits : %d\\n\", digits);\n",
        "  printf(\"Spaces/WS : %d\\n\", spaces);\n",
        "  printf(\"Others : %d\\n\", others);\n",
        "  return 0;\n",
        "}\n"
      ]
    },
    {
      "cell_type": "markdown",
      "source": [
        "if you want to use at txt as an input"
      ],
      "metadata": {
        "id": "erI5UjQzg3Sy"
      }
    },
    {
      "cell_type": "code",
      "source": [
        "%%writefile program.txt\n",
        "\n",
        "This is a sample file."
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "MUUdcBtRgtjf",
        "outputId": "abb24576-792f-4d7b-defa-b9911fa1a067"
      },
      "execution_count": null,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Writing program.txt\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "#@title Shell Execution (you can rewrite the commands as per your need, eg. if you want to include a file as an input)\n",
        "%%shell\n",
        "\n",
        "lex -l program.l\n",
        "gcc lex.yy.c\n",
        "./a.out program.txt"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "tqpZgNYpe263",
        "outputId": "0356f4bf-537c-428e-ab32-765badfbb647"
      },
      "execution_count": null,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Word Count: 5\n",
            "Character Count: 18\n",
            "Space Count: 4\n",
            "Line Count: 2\n"
          ]
        },
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": []
          },
          "metadata": {},
          "execution_count": 27
        }
      ]
    },
    {
      "cell_type": "markdown",
      "source": [
        "## Lex and Yacc combined"
      ],
      "metadata": {
        "id": "9g3qzHuCe9s1"
      }
    },
    {
      "cell_type": "code",
      "source": [
        "#@title Writing YACC program\n",
        "%%writefile program.y\n",
        "\n",
        "%{\n",
        "    #include<stdio.h>\n",
        "    #include<stdlib.h>\n",
        "%}\n",
        "%token DIGIT LETTER UND NL\n",
        "%%\n",
        "stmt: variable NL {printf(\"Valid Identifier\\n\");exit(0);}\n",
        "variable: LETTER alphanumeric;\n",
        "alphanumeric: LETTER alphanumeric\n",
        "            | DIGIT alphanumeric\n",
        "            | UND alphanumeric\n",
        "            | LETTER\n",
        "            | DIGIT\n",
        "            | UND;\n",
        "%%\n",
        "\n",
        "int yyerror(){\n",
        "    printf(\"Invalid Identifier\\n\");\n",
        "    exit(0);\n",
        "}\n",
        "\n",
        "void main(){\n",
        "    printf(\"Enter the variable name: \");\n",
        "    yyparse();\n",
        "}"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "PR_WVl_3kvjz",
        "outputId": "a19ffcd6-84d8-4a15-f1fe-5dd124b35450"
      },
      "execution_count": null,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Overwriting program.y\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "outputId": "ae488aa8-96d1-4cab-c243-5097cc230c51",
        "id": "d_jqt4ajkllz"
      },
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Overwriting program.l\n"
          ]
        }
      ],
      "source": [
        "#@title Writing Lex program\n",
        "%%writefile program.l\n",
        "\n",
        "%{\n",
        "    #include \"y.tab.h\"\n",
        "%}\n",
        "%%\n",
        "[a-zA-Z] {return LETTER;}\n",
        "[0-9] {return DIGIT;}\n",
        "[_] {return UND;}\n",
        "\\n {return NL;}\n",
        ". {return yytext[0];}\n",
        "%%"
      ]
    },
    {
      "cell_type": "markdown",
      "source": [
        "if you want to use at txt as an input"
      ],
      "metadata": {
        "id": "b0o39e7Ykll3"
      }
    },
    {
      "cell_type": "code",
      "source": [
        "%%writefile program.txt\n",
        "\n",
        "This is a sample file."
      ],
      "metadata": {
        "id": "vna5Qg34kll4"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "#@title Shell Execution (you can rewrite the commands as per your need, eg. if you want to include a file as an input)\n",
        "%%shell\n",
        "\n",
        "yacc -d program.y\n",
        "lex program.l\n",
        "cc y.tab.c lex.yy.c -ll\n",
        "./a.out"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "outputId": "edd8a233-74c0-471c-fa30-f023ef7ff458",
        "id": "nqs9Nq64kll4"
      },
      "execution_count": null,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "\u001b[01m\u001b[Ky.tab.c:\u001b[m\u001b[K In function ‘\u001b[01m\u001b[Kyyparse\u001b[m\u001b[K’:\n",
            "\u001b[01m\u001b[Ky.tab.c:1121:16:\u001b[m\u001b[K \u001b[01;35m\u001b[Kwarning: \u001b[m\u001b[Kimplicit declaration of function ‘\u001b[01m\u001b[Kyylex\u001b[m\u001b[K’ [\u001b[01;35m\u001b[K-Wimplicit-function-declaration\u001b[m\u001b[K]\n",
            "       yychar = \u001b[01;35m\u001b[Kyylex\u001b[m\u001b[K ();\n",
            "                \u001b[01;35m\u001b[K^~~~~\u001b[m\u001b[K\n",
            "\u001b[01m\u001b[Ky.tab.c:1256:7:\u001b[m\u001b[K \u001b[01;35m\u001b[Kwarning: \u001b[m\u001b[Kimplicit declaration of function ‘\u001b[01m\u001b[Kyyerror\u001b[m\u001b[K’; did you mean ‘\u001b[01m\u001b[Kyyerrok\u001b[m\u001b[K’? [\u001b[01;35m\u001b[K-Wimplicit-function-declaration\u001b[m\u001b[K]\n",
            "       \u001b[01;35m\u001b[Kyyerror\u001b[m\u001b[K (YY_(\"syntax error\"));\n",
            "       \u001b[01;35m\u001b[K^~~~~~~\u001b[m\u001b[K\n",
            "       \u001b[32m\u001b[Kyyerrok\u001b[m\u001b[K\n",
            "Enter the variable name: variable_name\n",
            "Valid Identifier\n"
          ]
        },
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": []
          },
          "metadata": {},
          "execution_count": 21
        }
      ]
    }
  ]
}