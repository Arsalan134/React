import React from "react";
import { BlogsView } from "./BlogsView/BlogsView";
import { HeaderView } from "./Header/HeaderView";
import { LoginForm } from "./Login/LoginForm";

// import { useTracker } from "Reactbuild-info.json";

const App = () => {
	// const user = useTracker(() => Meteor.user()); needs
	var user = {
		username: "Arsalan",
	};
	// 	..
	//     const hideCompletedFilter = { isChecked: { $ne: true } };

	//     const userFilter = user ? { userId: user._id } : {};

	//     const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

	//     const tasks = useTracker(() => {
	//       if (!user) {
	//         return [];
	//       }

	//       return TasksCollection.find(
	//         hideCompleted ? pendingOnlyFilter : userFilter,
	//         {
	//           sort: { createdAt: -1 },
	//         }
	//       ).fetch();
	//     });

	//     const pendingTasksCount = useTracker(() => {
	//       if (!user) {
	//         return 0;
	//       }

	//       return TasksCollection.find(pendingOnlyFilter).count();
	//     });
	// ..

	// <TaskForm  />;

	return (
		<div className="main">
			{user ? (
				<React.Fragment>
					<HeaderView />
					<BlogsView />
				</React.Fragment>
			) : (
				<LoginForm />
			)}
		</div>
	);
};

export default App;
