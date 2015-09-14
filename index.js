#!/usr/bin/env node
var shell = require('shelljs')

if (!shell.which('git')) {
  console.error('GITdrunk requires git. How sensational!')
}

var args = process.argv.splice(2)
var subcommand = args[0]

process.on('uncaughtException', function () {
  // Let's just ignore the error
  // If we don't, then unknown commands from git will
  // make our script complain
})

var rules = {
  'clone': 'Chug your drink, you unoriginal, copying, lazy piece of shit!',
  'pull': 'Good for you. You get a pass.',
  'branch': 'Drink. Ask yourself if the branch is justifiable and drink again.',
  'checkout': 'You get a pass for acknowledging good git practice!',
  'push': 'Fuck you. Drink two!',
  'revert': 'Take a shot. You suck, bro.',
  'reset': 'Take a shot. You suck, bro.',
  'rebase': 'I said code and drink, not fuck your repo till it bleeds. Take two shots, you zero.'
}

shell.exec('git ' + args.join(' '))

if (rules[subcommand]) {
  console.log(rules[subcommand])
}
