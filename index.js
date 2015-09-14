#!/usr/bin/env node
var shell = require('shelljs')

if (!shell.which('git')) {
  console.error('GITdrunk requires git. How sensational!')
}

var args = process.argv.splice(2)
var subcommand = args[0]

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

var cmd_string = args.map(function (arg) {
  if (arg.indexOf(' ') !== -1) {
    return '"' + arg + '"'
  }
  return arg
}).join(' ')

shell.exec('git ' + cmd_string)

if (rules[subcommand]) {
  console.log(rules[subcommand])
}
