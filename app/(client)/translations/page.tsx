import {  getAllTranslations } from '@/lib/client';
import TranslationList from './TranslationList';
export const dynamic = 'force-dynamic';
async function Translations() {
  const translations = await getAllTranslations();
  return (
    <TranslationList translations={translations} />
  )
}

export default Translations