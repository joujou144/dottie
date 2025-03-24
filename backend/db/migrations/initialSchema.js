// Initial database schema creation

/**
 * Create all tables for the Dottie application
 * @param {object} db - Knex database instance
 */
export async function createTables(db) {
  const isSQLite = db.client.config.client === 'sqlite3';
  
  // Users table
  if (!(await db.schema.hasTable('users'))) {
    await db.schema.createTable('users', (table) => {
      table.uuid('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('password_hash').notNullable();
      table.integer('age');
      table.timestamps(true, true);
    });
  }

  // Periods tracking table
  if (!(await db.schema.hasTable('period_logs'))) {
    await db.schema.createTable('period_logs', (table) => {
      table.increments('id').primary();
      table.uuid('user_id').notNullable();
      table.date('start_date').notNullable();
      table.date('end_date');
      table.integer('flow_level'); // 1-5 scale
      table.timestamps(true, true);
      
      // Foreign key handling based on database type
      if (!isSQLite) {
        table.foreign('user_id').references('users.id');
      } else {
        try {
          table.foreign('user_id').references('users.id');
        } catch (error) {
          console.warn('Warning: Could not create foreign key - common with SQLite:', error.message);
        }
      }
    });
  }

  // Symptoms tracking table
  if (!(await db.schema.hasTable('symptoms'))) {
    await db.schema.createTable('symptoms', (table) => {
      table.increments('id').primary();
      table.uuid('user_id').notNullable();
      table.date('date').notNullable();
      table.string('type').notNullable(); // cramps, headache, mood, etc.
      table.integer('severity'); // 1-5 scale
      table.text('notes');
      table.timestamps(true, true);
      
      // Foreign key handling based on database type
      if (!isSQLite) {
        table.foreign('user_id').references('users.id');
      } else {
        try {
          table.foreign('user_id').references('users.id');
        } catch (error) {
          console.warn('Warning: Could not create foreign key - common with SQLite:', error.message);
        }
      }
    });
  }

  // Assessment results table
  if (!(await db.schema.hasTable('assessments'))) {
    await db.schema.createTable('assessments', (table) => {
      table.increments('id').primary();
      table.uuid('user_id').notNullable();
      table.date('date').notNullable();
      table.string('result_category').notNullable(); // green, yellow, red
      table.text('recommendations');
      table.timestamps(true, true);
      
      // Foreign key handling based on database type
      if (!isSQLite) {
        table.foreign('user_id').references('users.id');
      } else {
        try {
          table.foreign('user_id').references('users.id');
        } catch (error) {
          console.warn('Warning: Could not create foreign key - common with SQLite:', error.message);
        }
      }
    });
  }
  
  // Enable foreign keys in SQLite
  if (isSQLite) {
    try {
      await db.raw('PRAGMA foreign_keys = ON');
    } catch (error) {
      console.warn('Warning: Could not enable foreign keys in SQLite:', error.message);
    }
  }
}

/**
 * Drop all tables from the database
 * @param {object} db - Knex database instance
 */
export async function dropTables(db) {
  await db.schema.dropTableIfExists('assessments');
  await db.schema.dropTableIfExists('symptoms');
  await db.schema.dropTableIfExists('period_logs');
  await db.schema.dropTableIfExists('users');
} 