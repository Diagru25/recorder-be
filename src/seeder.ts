import { seeder } from 'nestjs-seeder';
import {DatabaseModule} from './modules/database/database.module';
import { ProjectSeeder } from './project.seeder';

seeder({
  imports: [DatabaseModule],
}).run([ProjectSeeder]);
