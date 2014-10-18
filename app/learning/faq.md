---
layout: default
markdown: 1
title: Frequently Asked Questions
sidebar: sidebars/learning.html
---
[What are the goals of the project?](#project-goals)

[What is a command-line interface?](#what-is-CLI)

[What is a package manager?](#what-is-pkg-manager)

[How does Yeoman differ from Grunt?](#yeoman-vs-grunt)

[How does Yeoman differ from tools like Brunch or Ember-cli](#yeoman-vs-Ember-Brunch)

[How do I register or unregister a package on Bower?](#register-unregister-pkg)

[Will the Yeoman project be providing Generators for popular frameworks?</a>](#frameworks-generators)

[What license is Yeoman released under?</a>](#license)

[What should I do before submitting an issue through GitHub?</a>](#submit-issue)

[`npm` appears to have installed Yeoman but `yo` still gives me "command not found".</a>](#yo-command-not-found)

[I'm getting `EMFILE, too many open files`</a>](#too-many-files)

[What should I use for documenting my app?</a>](#documenting-app)

[How can I disable Insight or Update Notifier?</a>](#disable-notifier)

[Can I use livereloading with a custom webserver?</a>](#livereloading)

[What should I do after cloning a web application generated with Yeoman?</a>](#cloning)


### <a name="project-goals"> What are the goals of the project?</a>

The short-term goals for Yeoman are to provide developers with an improved tooling workflow so that they can spend less time on process and more time focusing on building beautiful web applications. Initially, we hope to make it as easy as possible to work with existing frameworks and tools developers are used to using.

Long-term, the project may also assist developers with creating applications using modern technologies such as Web Components.


### <a name="what-is-CLI"> What is a command-line interface?</a>

A command-line interface is a means for developers to interact with a system using text commands. On Linux or OSX, this is often done using the terminal. On Windows, we use the command shell (`cmd.exe`) or PowerShell.


### <a name="what-is-pkg-manager"> What is a package manager?</a>

A package manager is a tool for automating the process of installing, upgrading, configuring and managing dependencies for projects. Good examples of package manager would be npm (Node.js), Bower (Web), Pypi (Python), Gem (Ruby), Composer (PHP), NuGet (.NET), etc.


### <a name="yeoman-vs-grunt"> How does Yeoman differ from Grunt?</a>

Yeoman builds upon a number of open-source tools to offer an opinionated workflow that helps developers achieve common tasks more easily. [Grunt.js](http://gruntjs.com) is one of these tools and powers our underlying build process and task plugin architecture.

On top of this architecture, we've highly customized tasks, profiles and systems which work well together and also provide developers with features like our generator system and Bower integration. Yeoman takes care of configuring your Gruntfile and setup to support Sass, CoffeeScript and Require.js out of the box. With additional features like wiring, an improved `serve` and `init`.

Developers are free to customize any Grunt tasks configured by Yeoman.


### <a name="yeoman-vs-Ember-Brunch"> How does Yeoman differ from tools like Brunch or Ember-cli?</a>

We love tools like Brunch and Ember-cli and feel that they offer a great solution for developers wishing to scaffold with frameworks like Backbone.js and Ember. With the Yeoman generator system, as we've ported over the Rails Generator system to work with Node, we feel we have an interesting opportunity to take application scaffolding in a new direction - one where it's easier for any developer to write scaffolds, support multiple testing frameworks, capture their own boilerplates and easily re-use them and so on.


### <a name="register-unregister-pkg"> How do I register or unregister a package on Bower?</a>

Packages can be registered on Bower using the `register` command. e.g `bower register myawesomepackagename git://github.com/youraccount/yourrepo`. We recommend reading the Bower [documentation](http://bower.io) before doing this to ensure that your repo includes the necessary files to supporting being `install`ed.


### <a name="frameworks-generators"> Will the Yeoman project be providing Generators for popular frameworks?</a>

Our goal is to facilitate both developers and the community with the tools needed to create rich web applications easily. With that goal in mind, we'll be providing a great API (and docs) to our Generators system with examples of how to implement samples, but will rely on the community to create and maintain Generators for popular frameworks. This will allow us to focus on making Yeoman better without the distractions of maintaining a large number of Generators.

You can see the full [list of officially supported generators](https://github.com/yeoman?query=generator-) on Github.


### <a name="license"> What license is Yeoman released under?</a>

Yeoman is released under a [BSD](http://opensource.org/licenses/bsd-license.php/) license.


### <a name="submit-issue"> What should I do before submitting an issue through GitHub?</a>

Make sure you read the [Submitting an issue guide](/contributing/opening-issues.html).


### <a name="yo-command-not-found"> `npm` appears to have installed Yeoman but `yo` still gives me "command not found".</a>

It's likely your PATH does not account for global NPM modules just yet. Better documentation forthcoming but until then, read [this comment](https://github.com/yeoman/yeoman/issues/466#issuecomment-8602733) and [this thread](https://github.com/yeoman/yeoman/issues/430#issuecomment-8597663).

This usually happens when you install Node through Homebrew, since it puts Node modules in a directory that's not in your PATH.

From Homebrew:

```
==> Caveats
Homebrew installed npm.
We recommend prepending the following path to your PATH environment
variable to have npm-installed binaries picked up:
  /usr/local/share/npm/bin
```

Quick fix for advanced users is to put the following in your `.bashrc` file:
`export PATH=/usr/local/share/npm/bin:$PATH`

For beginners `brew uninstall node` and download and install Node from their [website](http://nodejs.org).


### <a name="too-many-files"> I'm getting `EMFILE, too many open files`</a>

EMFILE mean you've reached the OS limit of concurrently open files. There aren't much we can do about it, however you can increase the limit yourself.

Add `ulimit -n [number of files]` to your .bashrc/.zshrc file to increase the soft limit.

If you reach the OS hard limit, you can follow this [StackOverflow answer](http://stackoverflow.com/a/34645/64949) to increase it.



### <a name="documenting-app"> What should I use for documenting my app</a>


View the details within [#152 ticket for recommended solutions for documentation generation](https://github.com/yeoman/yeoman/issues/152#issuecomment-7081670)


### <a name="disable-notifier"> How can I disable Insight or Update Notifier?</a>

You can use use a command line flag to disable them. Eg. `yo webapp --no-insight`

Insight: `--no-insight`  
Update Notifier: `--no-update-notifier`

You can also add `yeoman_test` as an environment variable with any value to permanently disable both.


### <a name="livereloading"> Can I use livereloading with a custom webserver?</a>

You bet! You can remove the `connect` task from your Gruntfile and manually insert this snippet into your HTML:

```html
<!-- livereload script -->
<script>document.write('<script src="http://'
 + (location.host || 'localhost').split(':')[0]
 + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
</script>
```

After that, simply run `grunt serve` like you normally would and enjoy automatic page refreshes.


### <a name="cloning"> What should I do after cloning a web application generated with Yeoman?</a>

Yeoman creates a `.gitignore` file for you. This file adds `node_modules` and `bower_components` folders to the blacklist. So, to run `grunt serve` and download the Javascript dependencies listed in the `bower.json` file, you need to run both:

```sh
npm install
bower install
```

And check if these folders are created correctly.

### What can I do if _npm install -g yo_ fails on OS X with _sh: node: command not found_ ?

Try

```sh
sudo chmod a+rx /usr/local/bin /usr/local/bin/node
```

Authenticate and run it again.
Explanation: NPM runs the installation as _nobody_ which may cause the installation to fail in a way that seems as if _node_ was not found if the binary cannot be accessed.

<img src="/assets/img/yeoman-009.png" class="character">
