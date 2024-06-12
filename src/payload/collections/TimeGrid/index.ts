import type { CollectionConfig } from 'payload/types';
import { checkRole } from '../Users/checkRole';

const Timegrid: CollectionConfig = {
  slug: 'timegrid',
  admin: {
    useAsTitle: 'rowid',
    defaultColumns: [
      'rowid',
      'status',
      'timesheetid',
      'datecreated',
      'is_deleted',
      'datemodified',
      'note',
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'projecttaskid',
    ],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
    admin: ({ req: { user } }) => checkRole(['admin', 'user', 'supervisor'], user),
  },
  fields: [
    
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Not Started',
          value: 'not_started',
        },
        {
          label: 'In Progress',
          value: 'in_progress',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'On Hold',
          value: 'on_hold',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
      ],
    },
    {
      name: 'timesheetid',
      type: 'number',
      required: true,
    },
    {
      name: 'datecreated',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'is_deleted',
      type: 'checkbox',
    },
    {
      name: 'datemodified',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'note',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'sunday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'monday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'tuesday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'wednesday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'thursday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'friday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'saturday',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'projecttaskid',
      type: 'text',
      label: 'Project Task ID',
      maxLength: 200,
    },
  ],
  timestamps: true,
};

export default Timegrid;
