# check-spelling/check-spelling configuration

| File                                               | Purpose                                                                          | Format                                                    | Info                                                                                                 |
| -------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [dictionary.txt](dictionary.txt)                   | Replacement dictionary (creating this file will override the default dictionary) | one word per line                                         | [dictionary](https://github.com/check-spelling/check-spelling/wiki/Configuration#dictionary)         |
| [allow.txt](allow.txt)                             | Add words to the dictionary                                                      | one word per line (only letters and `'`s allowed)         | [allow](https://github.com/check-spelling/check-spelling/wiki/Configuration#allow)                   |
| [reject.txt](reject.txt)                           | Remove words from the dictionary (after allow)                                   | grep pattern matching whole dictionary words              | [reject](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-reject)     |
| [excludes.txt](excludes.txt)                       | Files to ignore entirely                                                         | perl regular expression                                   | [excludes](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-excludes) |
| [only.txt](only.txt)                               | Only check matching files (applied after excludes)                               | perl regular expression                                   | [only](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-only)         |
| [patterns.txt](patterns.txt)                       | Patterns to ignore from checked lines                                            | perl regular expression (order matters, first match wins) | [patterns](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-patterns) |
| [line_forbidden.patterns](line_forbidden.patterns) | Patterns to flag in checked lines                                                | perl regular expression (order matters, first match wins) | [patterns](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-patterns) |
| [expect.txt](expect.txt)                           | Expected words that aren't in the dictionary                                     | one word per line (sorted, alphabetically)                | [expect](https://github.com/check-spelling/check-spelling/wiki/Configuration#expect)                 |
| [advice.md](advice.md)                             | Supplement for GitHub comment when unrecognized words are found                  | GitHub Markdown                                           | [advice](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-advice)     |

Note: you can replace any of these files with a directory by the same name (minus the suffix)
and then include multiple files inside that directory (with that suffix) to merge multiple files together.

<!-- See https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples%3A-advice --> <!-- markdownlint-disable MD033 MD041 -->
<details><summary>If the flagged items are false positives</summary>

If items relate to a ...

- binary file (or some other file you wouldn't want to check at all).

  Please add a file path to the `excludes.txt` file matching the containing file.

  File paths are Perl 5 Regular Expressions - you can [test](https://www.regexplanet.com/advanced/perl/) yours before committing to verify it will match your files.

  `^` refers to the file's path from the root of the repository, so `^README\.md$` would exclude [README.md](../tree/HEAD/README.md) (on whichever branch you're using).

- well-formed pattern.

  If you can write a [pattern](https://github.com/check-spelling/check-spelling/wiki/Configuration-Examples:-patterns) that would match it,
  try adding it to the `patterns.txt` file.

  Patterns are Perl 5 Regular Expressions - you can [test](https://www.regexplanet.com/advanced/perl/) yours before committing to verify it will match your lines.

  Note that patterns can't match multiline strings.

</details>
