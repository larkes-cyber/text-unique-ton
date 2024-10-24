import { Address, toNano } from '@ton/core';
import { UnicueText } from '../wrappers/UnicueText';
import { NetworkProvider, sleep } from '@ton/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.open(await UnicueText.fromInit(7123n));

    const unicueText = provider.open(await UnicueText.fromInit(7123n));

    const allText = await unicueText.getAllText()
    console.log(allText)
}