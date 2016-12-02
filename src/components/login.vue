<template>
    <div class="bz-css-text-align">
        <!-- Login Form Begin -->
        <div class="bz-ui-login-form">
            <h1>The Show - Login</h1>
            <el-row>
                <el-col :offset="8" :span="8">
                    <el-input placeholder="Username" class="bz-margin-bottom-20px"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :offset="8" :span="8">
                    <el-input placeholder="Password" class="bz-margin-bottom-20px"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :offset="10" :span="2">
                    <el-button class="bz-width-full bz-margin-bottom-20px">Login</el-button>
                </el-col>
                <el-col :span="2">
                    <el-button class="bz-width-full">Register</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- Login Form End -->
    </div>
</template>

<script type="text/javascript">
    export default{};
</script>
