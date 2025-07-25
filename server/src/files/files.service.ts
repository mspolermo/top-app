import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.reposonse';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class FilesService {

	async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {

	}
}
