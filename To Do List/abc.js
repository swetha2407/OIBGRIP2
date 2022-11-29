window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const description = document.querySelector("#new-task-desc");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		const desc = description.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_descrip_el = document.createElement('div');
		task_descrip_el.classList.add('text1');
		const task_desc_el = document.createElement('input');
		task_desc_el.classList.add('text2');
		task_desc_el.type = 'text';
		task_desc_el.value = desc;
		task_desc_el.setAttribute('readonly', 'readonly');
		task_descrip_el.appendChild(task_desc_el);

		task_el.appendChild(task_descrip_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_save_el = document.createElement('button');
		task_save_el.classList.add('save');
		task_save_el.innerText = 'save';

		const task_finish_el = document.createElement('button');
		task_finish_el.classList.add('finish');
		task_finish_el.innerText = 'Done';
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_finish_el);
		task_actions_el.appendChild(task_save_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		description.value = '';

		task_edit_el.addEventListener('click', (e) => {
				task_input_el.removeAttribute("readonly");
				task_desc_el.removeAttribute("readonly");
				task_input_el.focus();
				task_desc_el.focus();
		});

		task_save_el.addEventListener('click', (e) => {
			task_input_el.setAttribute('readonly', 'readonly');
			task_desc_el.setAttribute('readonly', 'readonly');
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
			const finished_tasks = document.querySelector("#completed") 
			const inp = document.querySelector(".text");
			console.log(inp.value);
			task_finish_el.addEventListener('click', (e) => {
				task_actions_el.removeChild(task_finish_el);
				finished_tasks.appendChild(task_el);
				task_delete_el.addEventListener('click', (e) => {
				finished_tasks.removeChild(task_el);
			});
		});
	});
});