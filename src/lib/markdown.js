import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const project_root = process.cwd(); 
const relative_vault_path = process.env.OBSIDIAN_VAULT_PATH; 
const vault_dir = path.join(project_root, relative_vault_path || '');

export async function getNotes( fname ) {
    const full_path = path.join(vault_dir, fname.endsWith('.md') ? fname : `${fname}.md`);
    const file_contents = fs.readFileSync(full_path, 'utf8');
    const { data : metadata, content: markdown_stuff } = matter(file_contents);

    const html_content = await marked(markdown_stuff);
  
    return { metadata, html_content };
}