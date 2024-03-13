#!/bin/zsh

repoPath=~/Documents/F_JS/F_JS-GitCI/Repo_Formateur
repoUrl=https://github.com/AmauryD/github-actions

echo "Supression du dossier de repo"
rm -rf $repoPath

echo "Clonage du repository de Romain."
degit $repoUrl $repoPath
echo "Clonage effecté."