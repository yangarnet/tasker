const getUserTaskData = tasks => {
    return tasks.map(task => ({
        id: task.id,
        userId: task.sender_id,
        descripton: task.name.trim(),
        status: task.state.trim(),
        path: task.slug.trim()
    }));
};

const getUserProfile = profiles => {
    return profiles.map(profile => ({
        userName: profile.abbreviated_name.trim(),
        userId: profile.id,
        path: profile.slug.trim()
    }));
};

const processJsonFeed = feeds => {
    let result = [];
    try {
        const { tasks, profiles } = feeds;
        const userTasks = getUserTaskData(tasks);
        const userProfile = getUserProfile(profiles);

        result = userProfile.reduce((acc, profile) => {
            const tasks = userTasks.filter(
                task => task.userId === profile.userId
            );
            for (const task of tasks) {
                acc.push({
                    id: task.id,
                    user: profile.userName,
                    status: task.status.toUpperCase(),
                    description: task.descripton,
                    userpath: profile.path,
                    taskpath: task.path
                });
            }
            return acc;
        }, []);
    } catch (err) {
        throw err;
    } finally {
        return result;
    }
};

export default processJsonFeed;
