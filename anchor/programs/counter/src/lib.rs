use anchor_lang::prelude::*;

declare_id!("JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H");

#[program]
pub mod myprogram {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count = 0;
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count += 1;
        Ok(())
    }

    pub fn decrement(ctx: Context<Decrement>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count -= 1;
        Ok(())
    }

    pub fn reset(ctx: Context<Reset>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count = 0;
        Ok(())
    }
}

#[account]
#[derive(InitSpace)]
pub struct Counter {
    pub count: u64,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(init, payer = user, space = 8 + Counter::INIT_SPACE)]
    pub counter: Account<'info, Counter>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(mut)]
    pub counter: Account<'info, Counter>,
}

#[derive(Accounts)]
pub struct Decrement<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}

#[derive(Accounts)]
pub struct Reset<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}
