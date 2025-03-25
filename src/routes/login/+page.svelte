<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 mx-64 my-32 text-center">
    <img src="/rootaccess-logo-color.svg" alt="Root Access S.H.I.E.L.D" class="h-12 w-auto mb-16" />
    <p class="text-2xl font-bold">Login</p>
    <div class="items-center">
        <input type="text" class="input p-4 mx-16 my-4" placeholder="Username" required/>
        <input type="password" class="input p-4 mx-16 my-4" placeholder="Password" required/>
        <button type="button" class="btn preset-filled-primary-500 m-4" onclick={
            ()=> {
                //TODO: Actual authentication logic
                window.location.href = "/dashboard";
            }
        }>Login</button>
    </div>
</div>