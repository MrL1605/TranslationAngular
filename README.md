# TranslationAngular
An Angular Plugin for Translation of text.

## Setup

For easy customization, locale files are picked up while execution of App.

 - Create services to load locale files.
 - Append languages response to `translations` variable in TrlHolder.
 - Append language names to `trlLanguages`.
 - Whenever there is change in language, 
   - update the `currentLang` index,
   - and call `langChangeTrigger.next()` so that listeners can call Translation function and update text.

## How to

 - Directive - Add `trl` directive as shown below and the text will be translated according to the Translation JSON.

```angular2html
<tag trl> Text to translate. </tag>
```

 - Pipe - Add `trl` pipe to variable as shown below and the value of variable will be translated.

```angular2html
<tag> {{ varToTranslate | trl }} </tag>
```

## Release
I'll be publishing this on NPM soon. Wait for it.
