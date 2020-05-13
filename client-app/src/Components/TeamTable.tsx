import React from 'react';

import { Team, Teammate } from '../interfaces'; // REFACTOR
import {teamTableData} from '../helpers/local-data' // REFACTOR

import CreateTeamButton from './CreateTeamButton' // REFACTOR
import TableHeaders from './TableHeaders'  
import TeamTableRows from './TeamTableRows'

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';