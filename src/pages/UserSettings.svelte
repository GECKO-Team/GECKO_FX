<script>
    import {push} from "svelte-spa-router";
    import {getContext} from "svelte";
    let email = "";
    let password = "";
    let interests = "";
    let errorMessage = "";
    let newProfileImage = "";
    const userService = getContext("UserService");

    let user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        interests: ['Sport', 'Musik', 'Reisen'],
        currentImage: '/images/profilePicture.jfif'
    };
    async function changeUsername() {
        let success = await userService.changeEmail(email)
        if (success) {
            await push("/userSettings");
        } else {
            email = "";
            errorMessage = "Invalid Credentials";
        }
    }

    function uploadImage() {
        const fileInput = document.getElementById('profileImage');
        const currentImage = document.getElementById('currentImage');
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = function() {
            currentImage.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            currentImage.src = '';
        }
    }
</script>


<h2 class="title is-2">Edit user profile</h2>
<div class = "box">
    <div class="field">
        <label class="label">Change Username</label>
        <div class="control">
            <input bind:value={email} class="input" id="email" name="email" placeholder="new username" type="email">
        </div>
        <p class="help">Your username is your email address.</p>
    </div>
    <div class="field">
        <label class="label">Change Password</label>
        <div class="control">
            <input bind:value={password} class="input" id="password" name="password" placeholder="new password" type="password">
        </div>
    </div>
    <div class="field">
        <label class="label">Update your interests</label>
        <div class="control">
            <input bind:value={interests} class="input" id="interests" name="interests" placeholder="interests">
        </div>
    </div>
    <div class="field">
        <button class="button is-success is-rounded">Save</button>
    </div>
</div>

<h2 class="title is-2">Profile picture</h2>
<div class = "box"><div class="field">
    <label class="label">Current profile picture</label>
    <div class="control">
        <img src="{user.currentImage}" alt="ProfileImage" />
    </div>
    <label class="label">Upload new profile picture</label>
    <div class="control">
        <input type="file" id="imageFile" accept="image/*" bind:value="{newProfileImage}" />
        {#if newProfileImage}
            <img src="imageFile" alt="imageFile">
        {/if}
    </div>
    <div></div>
    <div class="field">
        <button class="button is-success is-rounded" onclick="uploadImage()">Upload</button>
    </div>
</div>
</div>