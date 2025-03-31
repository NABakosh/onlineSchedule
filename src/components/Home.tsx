import '@sass/main/home.scss'
import { useState } from 'react'

interface ScheduleItem {
	id: number
	Время: string
	Пн: string
	Вт: string
	Ср: string
	Чт: string
	Пт: string
	Сб: string
	Вс: string
}
const schedule: ScheduleItem[] = [
	{
		id: 1,
		Время: '8 00',
		Пн: 'Физика',
		Вт: 'Физ/культура',
		Ср: '',
		Чт: 'Тест ',
		Пт: '',
		Сб: '',
		Вс: ''
	},
	{
		id: 2,
		Время: '9 30',
		Пн: 'Математика',
		Вт: 'Спец Предмет',
		Ср: '',
		Чт: 'Тест ',
		Пт: '2',
		Сб: '',
		Вс: ''
	},
	{
		id: 3,
		Время: '11 00',
		Пн: 'Химия',
		Вт: 'Казахский',
		Ср: '',
		Чт: '123',
		Пт: '22',
		Сб: '',
		Вс: ''
	},
	{
		id: 4,
		Время: '12 50',
		Пн: 'Иностранный язык',
		Вт: '',
		Ср: '',
		Чт: '213',
		Пт: '23',
		Сб: '',
		Вс: ''
	},
	{
		id: 5,
		Время: '14 20',
		Пн: '',
		Вт: '',
		Ср: 'Русский',
		Чт: '',
		Пт: '2',
		Сб: '',
		Вс: ''
	},
	{
		id: 6,
		Время: '15 50',
		Пн: '',
		Вт: '',
		Ср: 'Английски',
		Чт: '',
		Пт: '',
		Сб: '',
		Вс: ''
	},
	{
		id: 7,
		Время: '17 15',
		Пн: '',
		Вт: '',
		Ср: '',
		Чт: '',
		Пт: '',
		Сб: '',
		Вс: ''
	}
]
const times: string[] = [
	'8:00',
	'9:30',
	'11:00',
	'12:50',
	'14:20',
	'15:50',
	'17:15'
]

const keys: any[] = Object.keys(schedule[0])
keys.shift()
keys.shift()

const days: string[] = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье'
]
const dayMap: { [key: string]: string } = {
	Понедельник: 'Пн',
	Вторник: 'Вт',
	Среда: 'Ср',
	Четверг: 'Чт',
	Пятница: 'Пт',
	Суббота: 'Сб',
	Воскресенье: 'Вс'
}
const todayIndex = (new Date().getDay() + 6) % 7
const today = days[todayIndex]

const Home: React.FC = () => {
	const [selectedDay, setSelectedDay] = useState(today)
	const selectedIndex = days.indexOf(selectedDay)
	const topOffset = selectedIndex * 49.5
	return (
		<>
			<div className='body'>
				<article>
					<h1>Группа 100</h1>
					<input placeholder='Поиск группы' />
				</article>
				<main>
					<table>
						{schedule.map((obj, index) => (
							<tr key={obj.id}>
								<td>{times[index]}</td>
								<td>{obj[dayMap[selectedDay]]}</td>{' '}
							</tr>
						))}
					</table>
					<div className='sidebar'>
						{days.map(day => (
							<p
								className={selectedDay === day ? 'select' : ''}
								onClick={() => setSelectedDay(day)}
							>
								{day}
							</p>
						))}
						<div
							className='selected-bg'
							style={{ top: `${topOffset}px` }}
						></div>
					</div>
				</main>
			</div>
		</>
	)
}
export default Home
