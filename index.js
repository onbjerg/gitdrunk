#!/usr/bin/env node
var shell = require('shelljs')

if (!shell.which('git')) {
  console.error('gitdrunk requires git.')
}

var args = process.argv.splice(2)
var subcommand = args[0]

var rules = {
  'clone': 'How unoriginal. Chug your drink.',
  'pull': 'Good for you. You get a pass.',
  'branch': 'Drink. Ask yourself if the branch is justifiable and drink again.',
  'checkout': 'You get a pass for acknowledging good git practice!',
  'push': 'Don\'t do that. Drink two!',
  'revert': 'Take a shot. You suck.',
  'reset': 'Take a shot. You suck.',
  'rebase': 'I said code and drink, not fuck your repo \'till it bleeds. Take a shot.',
  'blame': 'What a team player. Take a drink.'
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
