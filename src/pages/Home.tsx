import { useState } from "react"

const Home: React.FC = () =>{
    const [value, setValue] = useState(0)

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
				Вс: '',
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
				Вс: '',
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
				Вс: '',
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
				Вс: '',
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
				Вс: '',
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
				Вс: '',
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
				Вс: '',
			},
		]
		const keys = Object.keys(schedule[0])
		keys.shift()
    return (
        
			<>
				<article>
					<h3>Группа 100</h3>
					<div>
						<input placeholder='Поиск группы..' />
					</div>
				</article>
				<main>
					{keys.map((head, headIndex) => (
						<div className='table'>
							<div
								className={`head ${
									headIndex == 0
										? 'time-column'
										: headIndex === 6 || headIndex === 7
										? 'weekend-column'
										: headIndex == 3
										? 'current'
										: ''
								}`}
							>
								<h5 className=''>{head}</h5>
							</div>
							<div
								className={`body ${
									headIndex == 0
										? 'time-column'
										: headIndex === 6 || headIndex === 7
										? 'weekend-column'
										: headIndex == 3
										? 'current'
										: ''
								}`}
							>
								{schedule.map((obj, index) =>
									head === 'time' ? (
										<div
											className={`body-block'} `}
											style={index === 6 ? { border: 'none' } : {}}
										>
											<p>{obj[head as keyof ScheduleItem]}</p>
										</div>
									) : (
										<div
											className='body-block'
											style={index === 6 ? { border: 'none' } : {}}
										>
											<a>{obj[head as keyof ScheduleItem]}</a>
										</div>
									)
								)}
							</div>
						</div>
					))}
				</main>
			</>
		)
}
export default Home